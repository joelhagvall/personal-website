import { FREELANCE } from "@/data/freelance";
import {
  buildMailtoLink,
  buildProjectBrief,
  createInitialFreelanceInquiryState,
  MIN_PROJECT_BRIEF_LENGTH,
  normalizeFreelanceInquiryState,
  validateFreelanceInquiryField,
  validateFreelanceInquiryState,
} from "./freelance-inquiry";

describe("createInitialFreelanceInquiryState", () => {
  it("uses the first configured options as defaults", () => {
    expect(createInitialFreelanceInquiryState()).toEqual({
      name: "",
      company: "",
      email: "",
      projectType: FREELANCE.contact.projectTypes[0],
      budget: FREELANCE.contact.budgetOptions[0],
      timeline: FREELANCE.contact.timelineOptions[0],
      details: "",
    });
  });
});

describe("buildProjectBrief", () => {
  it("formats all submitted project details into a shareable brief", () => {
    const result = buildProjectBrief({
      name: "Joel",
      company: "Acme",
      email: "joel@example.com",
      projectType: "MVP",
      budget: "$5k-$10k",
      timeline: "ASAP",
      details: "Need a production-ready MVP.",
    });

    expect(result).toBe(
      [
        "Name: Joel",
        "Company: Acme",
        "Email: joel@example.com",
        "Project type: MVP",
        "Budget: $5k-$10k",
        "Timeline: ASAP",
        "",
        "Project brief:",
        "Need a production-ready MVP.",
      ].join("\n")
    );
  });

  it("falls back to 'Not provided' for optional blank fields", () => {
    const result = buildProjectBrief({
      name: "",
      company: "",
      email: "",
      projectType: "Other",
      budget: "Not defined yet",
      timeline: "Just exploring",
      details: "",
    });

    expect(result).toContain("Name: Not provided");
    expect(result).toContain("Company: Not provided");
    expect(result).toContain("Email: Not provided");
    expect(result).toContain("Project brief:\nNot provided");
  });

  it("trims whitespace before formatting the brief", () => {
    const result = buildProjectBrief({
      name: "  Joel  ",
      company: "  Acme  ",
      email: "  joel@example.com  ",
      projectType: " MVP ",
      budget: " $5k-$10k ",
      timeline: " ASAP ",
      details: "  Need a production-ready MVP.  ",
    });

    expect(result).toContain("Name: Joel");
    expect(result).toContain("Company: Acme");
    expect(result).toContain("Email: joel@example.com");
    expect(result).toContain("Project type: MVP");
    expect(result).toContain("Budget: $5k-$10k");
    expect(result).toContain("Timeline: ASAP");
    expect(result).toContain("Project brief:\nNeed a production-ready MVP.");
  });
});

describe("buildMailtoLink", () => {
  it("encodes the subject and body into a mailto link", () => {
    const result = buildMailtoLink({
      name: "Joel",
      company: "Acme",
      email: "joel@example.com",
      projectType: "MVP",
      budget: "$5k-$10k",
      timeline: "ASAP",
      details: "Need a production-ready MVP.",
    });

    expect(result).toBe(
      `mailto:${FREELANCE.contact.email}?subject=${encodeURIComponent(
        "Project inquiry from Joel (Acme)"
      )}&body=${encodeURIComponent(
        [
          "Name: Joel",
          "Company: Acme",
          "Email: joel@example.com",
          "Project type: MVP",
          "Budget: $5k-$10k",
          "Timeline: ASAP",
          "",
          "Project brief:",
          "Need a production-ready MVP.",
        ].join("\n")
      )}`
    );
  });

  it("omits the company suffix when no company is provided", () => {
    const result = buildMailtoLink({
      name: "Joel",
      company: "",
      email: "",
      projectType: "MVP",
      budget: "Under $2k",
      timeline: "This month",
      details: "Need help shipping.",
    });

    expect(result).toContain(
      `subject=${encodeURIComponent("Project inquiry from Joel")}`
    );
  });

  it("uses trimmed values in the generated subject", () => {
    const result = buildMailtoLink({
      name: "  Joel  ",
      company: "  Acme  ",
      email: "",
      projectType: "MVP",
      budget: "Under $2k",
      timeline: "This month",
      details: "Need help shipping.",
    });

    expect(result).toContain(
      `subject=${encodeURIComponent("Project inquiry from Joel (Acme)")}`
    );
  });
});

describe("normalizeFreelanceInquiryState", () => {
  it("trims user-entered fields before downstream use", () => {
    expect(
      normalizeFreelanceInquiryState({
        name: "  Joel  ",
        company: "  Acme  ",
        email: "  joel@example.com  ",
        projectType: " MVP ",
        budget: " Under $2k ",
        timeline: " ASAP ",
        details: "  Need help shipping.  ",
      })
    ).toEqual({
      name: "Joel",
      company: "Acme",
      email: "joel@example.com",
      projectType: "MVP",
      budget: "Under $2k",
      timeline: "ASAP",
      details: "Need help shipping.",
    });
  });
});

describe("validateFreelanceInquiryState", () => {
  it("accepts a valid inquiry and returns the normalized data", () => {
    const result = validateFreelanceInquiryState({
      name: "  Joel  ",
      company: " Acme ",
      email: " joel@example.com ",
      projectType: "MVP",
      budget: "Under $2k",
      timeline: "ASAP",
      details: "  Need help shipping a production-ready MVP quickly.  ",
    });

    expect(result.normalized).toEqual({
      name: "Joel",
      company: "Acme",
      email: "joel@example.com",
      projectType: "MVP",
      budget: "Under $2k",
      timeline: "ASAP",
      details: "Need help shipping a production-ready MVP quickly.",
    });
    expect(result.errors).toEqual({});
  });

  it("requires a non-empty name after trimming", () => {
    const result = validateFreelanceInquiryState({
      name: "   ",
      company: "",
      email: "",
      projectType: "MVP",
      budget: "Under $2k",
      timeline: "ASAP",
      details: "Need help shipping a production-ready MVP quickly.",
    });

    expect(result.errors.name).toBe("Name is required.");
  });

  it("validates email only when one is provided", () => {
    const result = validateFreelanceInquiryState({
      name: "Joel",
      company: "",
      email: "joel@invalid",
      projectType: "MVP",
      budget: "Under $2k",
      timeline: "ASAP",
      details: "Need help shipping a production-ready MVP quickly.",
    });

    expect(result.errors.email).toBe("Enter a valid email address.");
  });

  it("requires a meaningful project brief", () => {
    const result = validateFreelanceInquiryState({
      name: "Joel",
      company: "",
      email: "",
      projectType: "MVP",
      budget: "Under $2k",
      timeline: "ASAP",
      details: "Too short",
    });

    expect(result.errors.details).toBe(
      `Project brief must be at least ${MIN_PROJECT_BRIEF_LENGTH} characters.`
    );
  });
});

describe("validateFreelanceInquiryField", () => {
  it("returns an email error on blur for an incomplete email address", () => {
    const result = validateFreelanceInquiryField(
      {
        name: "Joel",
        company: "",
        email: "joel@invalid",
        projectType: "MVP",
        budget: "Under $2k",
        timeline: "ASAP",
        details: "Need help shipping a production-ready MVP quickly.",
      },
      "email"
    );

    expect(result.error).toBe("Enter a valid email address.");
  });

  it("returns no email error when the field is blank", () => {
    const result = validateFreelanceInquiryField(
      {
        name: "Joel",
        company: "",
        email: "",
        projectType: "MVP",
        budget: "Under $2k",
        timeline: "ASAP",
        details: "Need help shipping a production-ready MVP quickly.",
      },
      "email"
    );

    expect(result.error).toBeUndefined();
  });
});
