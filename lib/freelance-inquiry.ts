import { FREELANCE } from "@/data/freelance";

export type FreelanceInquiryFormState = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
};

export type FreelanceInquiryValidationErrors = Partial<
  Record<"name" | "email" | "details", string>
>;
export type FreelanceInquiryValidatableField =
  keyof FreelanceInquiryValidationErrors;

export const MIN_PROJECT_BRIEF_LENGTH = 20;

export function createInitialFreelanceInquiryState(): FreelanceInquiryFormState {
  return {
    name: "",
    company: "",
    email: "",
    projectType: FREELANCE.contact.projectTypes[0] ?? "",
    budget: FREELANCE.contact.budgetOptions[0] ?? "",
    timeline: FREELANCE.contact.timelineOptions[0] ?? "",
    details: "",
  };
}

export function normalizeFreelanceInquiryState(
  formData: FreelanceInquiryFormState
): FreelanceInquiryFormState {
  return {
    ...formData,
    name: formData.name.trim(),
    company: formData.company.trim(),
    email: formData.email.trim(),
    projectType: formData.projectType.trim(),
    budget: formData.budget.trim(),
    timeline: formData.timeline.trim(),
    details: formData.details.trim(),
  };
}

export function validateFreelanceInquiryState(
  formData: FreelanceInquiryFormState
): {
  normalized: FreelanceInquiryFormState;
  errors: FreelanceInquiryValidationErrors;
} {
  const normalized = normalizeFreelanceInquiryState(formData);
  const errors: FreelanceInquiryValidationErrors = {};

  if (!normalized.name) {
    errors.name = "Name is required.";
  }

  if (
    normalized.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (!normalized.details) {
    errors.details = "Project brief is required.";
  } else if (normalized.details.length < MIN_PROJECT_BRIEF_LENGTH) {
    errors.details = `Project brief must be at least ${MIN_PROJECT_BRIEF_LENGTH} characters.`;
  }

  return { normalized, errors };
}

export function validateFreelanceInquiryField(
  formData: FreelanceInquiryFormState,
  field: FreelanceInquiryValidatableField
): {
  normalized: FreelanceInquiryFormState;
  error?: string;
} {
  const { normalized, errors } = validateFreelanceInquiryState(formData);
  const error = errors[field];

  if (!error) {
    return { normalized };
  }

  return { normalized, error };
}

export function buildProjectBrief(formData: FreelanceInquiryFormState) {
  const normalized = normalizeFreelanceInquiryState(formData);

  return [
    `Name: ${normalized.name || "Not provided"}`,
    `Company: ${normalized.company || "Not provided"}`,
    `Email: ${normalized.email || "Not provided"}`,
    `Project type: ${normalized.projectType}`,
    `Budget: ${normalized.budget}`,
    `Timeline: ${normalized.timeline}`,
    "",
    "Project brief:",
    normalized.details || "Not provided",
  ].join("\n");
}

export function buildMailtoLink(formData: FreelanceInquiryFormState) {
  const normalized = normalizeFreelanceInquiryState(formData);
  const subject = `Project inquiry from ${normalized.name}${
    normalized.company ? ` (${normalized.company})` : ""
  }`;

  const body = buildProjectBrief(normalized);

  return `mailto:${FREELANCE.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
