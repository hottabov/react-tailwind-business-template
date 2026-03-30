import { useId, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { getTrackingFields } from "@/utils/tracking";

export default function QuoteRequestForm({
  formName = "quote-request",
  submitLabel = "Request a Free Quote",
  formContext = "website",
  className = "",
}) {
  const formId = useId();
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const trackingFields = useMemo(() => getTrackingFields(), []);

  const onSubmit = async (data) => {
    setSubmitError("");

    const payload = {
      "form-name": formName,
      "bot-field": "",
      subject: "New lead from %{formName} (%{submissionId})",
      form_context: formContext,
      ...trackingFields,
      ...data,
    };

    const body = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      body.append(key, value ?? "");
    });

    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    if (!response.ok) {
      setSubmitError("Something went wrong. Please try again.");
      return;
    }

    reset();
  };

  return (
    <div className={className}>
      {isSubmitSuccessful && (
        <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300">
          Thanks. We&apos;ll be in touch shortly with the next step.
        </div>
      )}
      {submitError && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
          {submitError}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        name={formName}
        data-netlify="true"
        method="POST"
        netlify-honeypot="bot-field"
        className="space-y-5"
      >
        <input type="hidden" name="form-name" value={formName} />
        <input type="hidden" name="subject" value="New lead from %{formName} (%{submissionId})" />
        <input type="hidden" name="form_context" value={formContext} />
        <div className="hidden">
          <label htmlFor={`${formId}-bot-field`}>
            Don&apos;t fill this out if you&apos;re human:
          </label>
          <input id={`${formId}-bot-field`} tabIndex="-1" autoComplete="off" {...register("bot-field")} />
        </div>
        {Object.entries(trackingFields).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} readOnly />
        ))}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor={`${formId}-first-name`}
              className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name *
            </label>
            <input
              id={`${formId}-first-name`}
              {...register("firstName", {
                required: "Name is required",
              })}
              placeholder="Jane"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-card dark:text-white"
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${formId}-last-name`}
              className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Surname *
            </label>
            <input
              id={`${formId}-last-name`}
              {...register("lastName", {
                required: "Surname is required",
              })}
              placeholder="Smith"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-card dark:text-white"
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Phone *
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone is required",
              validate: (value) =>
                !value ||
                isValidPhoneNumber(value) ||
                "Enter a valid phone number",
            }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                id={`${formId}-phone`}
                defaultCountry="AU"
                international={false}
                countryCallingCodeEditable={false}
                placeholder="0400 123 456"
                className="quote-phone-input"
              />
            )}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email *
          </label>
          <input
            id={`${formId}-email`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="jane@example.com"
            type="email"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-card dark:text-white"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${formId}-message`}
            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id={`${formId}-message`}
            {...register("message")}
            rows={5}
            placeholder="Tell us about your project — size, current condition, timing, etc. Leave this blank if you're not sure."
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-card dark:text-white"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-brand-500 py-4 text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:scale-[1.02] hover:bg-brand-600"
        >
          {isSubmitting ? "Sending..." : submitLabel}
        </button>
      </form>
    </div>
  );
}
