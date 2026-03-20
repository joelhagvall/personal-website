"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FREELANCE } from "@/data/freelance";
import {
  buildMailtoLink,
  buildProjectBrief,
  createInitialFreelanceInquiryState,
  type FreelanceInquiryFormState,
  type FreelanceInquiryValidatableField,
  type FreelanceInquiryValidationErrors,
  MIN_PROJECT_BRIEF_LENGTH,
  validateFreelanceInquiryField,
  validateFreelanceInquiryState,
} from "@/lib/freelance-inquiry";

const INITIAL_STATE: FreelanceInquiryFormState = createInitialFreelanceInquiryState();

const FIELD_CLASSNAME =
  "border-white/10 bg-black/20 text-white placeholder:text-gray-500 focus-visible:ring-white/10";

export function FreelanceInquiryForm() {
  const [formData, setFormData] = useState<FreelanceInquiryFormState>(INITIAL_STATE);
  const [fieldErrors, setFieldErrors] = useState<FreelanceInquiryValidationErrors>(
    {}
  );
  const [copyEmailState, setCopyEmailState] = useState<"idle" | "copied" | "error">("idle");
  const [copyDraftState, setCopyDraftState] = useState<"idle" | "copied" | "error">("idle");

  function setFieldError(
    field: FreelanceInquiryValidatableField,
    error?: string
  ) {
    setFieldErrors((current) => {
      if (!error) {
        if (!current[field]) {
          return current;
        }

        const next = { ...current };
        delete next[field];
        return next;
      }

      if (current[field] === error) {
        return current;
      }

      return { ...current, [field]: error };
    });
  }

  function updateField<K extends keyof FreelanceInquiryFormState>(
    field: K,
    value: FreelanceInquiryFormState[K]
  ) {
    setFormData((current) => {
      const next = { ...current, [field]: value };

      if (field === "name" || field === "email" || field === "details") {
        const { error } = validateFreelanceInquiryField(next, field);
        setFieldError(field, error);
      }

      return next;
    });
  }

  function handleFieldBlur(field: FreelanceInquiryValidatableField) {
    const { normalized, error } = validateFreelanceInquiryField(formData, field);

    setFormData(normalized);
    setFieldError(field, error);
  }

  function handleOpenEmailDraft() {
    const { normalized, errors } = validateFreelanceInquiryState(formData);

    setFormData(normalized);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    window.location.href = buildMailtoLink(normalized);
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(FREELANCE.contact.email);
      setCopyEmailState("copied");
      window.setTimeout(() => setCopyEmailState("idle"), 2000);
    } catch {
      setCopyEmailState("error");
      window.setTimeout(() => setCopyEmailState("idle"), 2000);
    }
  }

  async function handleCopyDraft() {
    try {
      await navigator.clipboard.writeText(buildProjectBrief(formData));
      setCopyDraftState("copied");
      window.setTimeout(() => setCopyDraftState("idle"), 2000);
    } catch {
      setCopyDraftState("error");
      window.setTimeout(() => setCopyDraftState("idle"), 2000);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
      <Card className="border-white/10 bg-white/[0.04] text-white">
        <CardHeader>
          <CardTitle className="text-xl text-white">Project details</CardTitle>
          <CardDescription>
            Opens a pre-filled email draft to {FREELANCE.contact.email}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="work-name" className="text-gray-200">
                  {FREELANCE.contact.fields.name}
                </Label>
                <Input
                  id="work-name"
                  required
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  onBlur={() => handleFieldBlur("name")}
                  className={FIELD_CLASSNAME}
                  placeholder={FREELANCE.contact.placeholders.name}
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? "work-name-error" : undefined}
                />
                {fieldErrors.name ? (
                  <p id="work-name-error" className="text-sm text-red-300">
                    {fieldErrors.name}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="work-company" className="text-gray-200">
                  {FREELANCE.contact.fields.company}
                </Label>
                <Input
                  id="work-company"
                  value={formData.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  className={FIELD_CLASSNAME}
                  placeholder={FREELANCE.contact.placeholders.company}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="work-email" className="text-gray-200">
                  {FREELANCE.contact.fields.email}
                </Label>
                <Input
                  id="work-email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  onBlur={() => handleFieldBlur("email")}
                  className={FIELD_CLASSNAME}
                  placeholder={FREELANCE.contact.placeholders.email}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? "work-email-error" : undefined}
                />
                {fieldErrors.email ? (
                  <p id="work-email-error" className="text-sm text-red-300">
                    {fieldErrors.email}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label className="text-gray-200">
                  {FREELANCE.contact.fields.projectType}
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => updateField("projectType", value)}
                >
                  <SelectTrigger className={FIELD_CLASSNAME}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {FREELANCE.contact.projectTypes.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-gray-200">
                  {FREELANCE.contact.fields.budget}
                </Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => updateField("budget", value)}
                >
                  <SelectTrigger className={FIELD_CLASSNAME}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {FREELANCE.contact.budgetOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-200">
                  {FREELANCE.contact.fields.timeline}
                </Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => updateField("timeline", value)}
                >
                  <SelectTrigger className={FIELD_CLASSNAME}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {FREELANCE.contact.timelineOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="work-details" className="text-gray-200">
                {FREELANCE.contact.fields.details}
              </Label>
              <Textarea
                id="work-details"
                required
                rows={7}
                minLength={MIN_PROJECT_BRIEF_LENGTH}
                value={formData.details}
                onChange={(event) => updateField("details", event.target.value)}
                onBlur={() => handleFieldBlur("details")}
                className={FIELD_CLASSNAME}
                placeholder={FREELANCE.contact.placeholders.details}
                aria-invalid={Boolean(fieldErrors.details)}
                aria-describedby={fieldErrors.details ? "work-details-error" : undefined}
              />
              {fieldErrors.details ? (
                <p id="work-details-error" className="text-sm text-red-300">
                  {fieldErrors.details}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Include enough detail to explain the scope, timeline, and goal.
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                onClick={handleOpenEmailDraft}
                variant="outline"
                className="gap-2.5 border-white/10 bg-white/10 px-4 text-white hover:bg-white/20 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {FREELANCE.contact.submitLabel}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCopyDraft}
                className="gap-2.5 border-white/10 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
              >
                {copyDraftState === "copied" ? (
                  <Check className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
                {copyDraftState === "copied"
                  ? "Brief copied"
                  : copyDraftState === "error"
                    ? "Copy failed"
                    : FREELANCE.contact.copyDraftLabel}
              </Button>
              <p className="text-sm text-muted-foreground">
                Copy the brief first if you want to save it before opening mail.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-black/20 text-white">
        <CardHeader>
          <CardTitle className="text-xl text-white">Direct contact</CardTitle>
          <CardDescription>{FREELANCE.contact.note}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Email</p>
            <a
              href={`mailto:${FREELANCE.contact.email}`}
              className="mt-2 block text-lg font-medium text-white transition-colors hover:text-gray-300"
            >
              {FREELANCE.contact.email}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button
              asChild
              variant="outline"
              className="w-full justify-center gap-2.5 border-white/10 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`mailto:${FREELANCE.contact.email}`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                {FREELANCE.contact.emailCtaLabel}
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleCopyEmail}
              className="w-full justify-center gap-2.5 border-white/10 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
            >
              {copyEmailState === "copied" ? (
                <Check className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
              {copyEmailState === "copied"
                ? "Copied"
                : copyEmailState === "error"
                  ? "Copy failed"
                  : FREELANCE.contact.copyEmailLabel}
            </Button>
          </div>

          <div className="grid gap-3 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-medium text-white">{FREELANCE.page.availability.label}</p>
              <p className="mt-1 text-muted-foreground">{FREELANCE.page.availability.value}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-medium text-white">{FREELANCE.page.responseTime.label}</p>
              <p className="mt-1 text-muted-foreground">{FREELANCE.page.responseTime.value}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
