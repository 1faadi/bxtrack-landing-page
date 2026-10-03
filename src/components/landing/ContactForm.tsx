"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { awards, techStacks, url } from "@/lib/content";
import { ArrowUpRight, Upload } from "@/components/icons";
import { Marquee } from "./Marquee";

const field =
  "w-full rounded-[50px] border border-[#e8e8e8] bg-field px-6 py-3 text-[15px] text-[#666] transition placeholder:text-[#999] focus:border-[#b4f34e] focus:shadow-[0_0_0_3px_rgba(180,243,78,0.1)] focus:outline-none";
const ACCEPT = ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt";
const allTech = techStacks.flatMap((s) => s.items.map((t) => t.name));

export function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [sent, setSent] = useState(false);

  const addFiles = (list: FileList | null) => list && setFiles((f) => [...f, ...Array.from(list)]);

  return (
    <section
      id="contact-sales"
      className="relative z-10 scroll-mt-28 bg-[radial-gradient(90%_70%_at_50%_40%,rgba(135,230,75,0.35),rgba(135,230,75,0.14)_24%,transparent_70%),linear-gradient(0deg,#000_50%,transparent_50%)] px-[15px] pt-40 pb-20 sm:px-5"
    >
      <div className="mx-auto max-w-[980px] rounded-[32px] border-[3px] border-lime bg-white px-5 pt-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] sm:px-[45px] sm:pt-[45px]">
        <div className="mb-[30px] text-center">
          <h2 className="mb-3 text-[30px] font-semibold tracking-[-1px] text-[#130e27] sm:text-[40px]">Let’s Discuss Your Needs</h2>
          <p className="mb-6 text-base font-light text-[#130e27] capitalize">Tell us about your project. we&apos;ll take it from there</p>
          <div className="h-px w-full bg-line" />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // ponytail: no backend yet — wire this to an API route or form service to actually send leads.
            setSent(true);
          }}
        >
          <div className="mb-6 grid gap-6 sm:grid-cols-2">
            <label>
              <span className="sr-only">Full name</span>
              <input name="fullName" placeholder="Full Name" required autoComplete="name" className={field} />
            </label>
            <label className="relative block">
              <span className="sr-only">Contact number</span>
              <Image
                src="/images/USA_a4cd0947fc.svg"
                alt=""
                width={18}
                height={12}
                className="absolute top-1/2 left-6 h-3 w-[18px] -translate-y-1/2 object-cover"
              />
              <input name="phone" type="tel" defaultValue="+1" autoComplete="tel" className={cn(field, "pl-14")} />
            </label>
          </div>
          <div className="mb-6 grid gap-6 sm:grid-cols-2">
            <label>
              <span className="sr-only">Email address</span>
              <input name="email" type="email" placeholder="Email Address *" required autoComplete="email" className={field} />
            </label>
            <label>
              <span className="sr-only">Choose your tech stack</span>
              <select name="techStack" defaultValue="" className={cn(field, "appearance-none")}>
                <option value="" disabled>
                  Choose Your Tech Stack
                </option>
                {allTech.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="mb-2 block">
            <span className="sr-only">Project details</span>
            <textarea
              name="projectDetails"
              rows={2}
              required
              placeholder="Help us understand what you require assistance with, the goal of your project, and the problem we're dedicated to solving *"
              className={cn(field, "min-h-[calc(3em+40px)] resize-y rounded-xl px-6 py-5 leading-[1.5]")}
            />
          </label>

          <div className="mb-6">
            <label
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                addFiles(e.dataTransfer.files);
              }}
              className={cn(
                "flex min-h-[140px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-7 transition-colors hover:border-[#9fe870]",
                dragging ? "border-[#9fe870] bg-[#f4f8ef]" : "border-[#e7e7e7] bg-field",
              )}
            >
              <input type="file" name="files" accept={ACCEPT} multiple className="sr-only" onChange={(e) => addFiles(e.target.files)} />
              <span className="flex size-12 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(19,14,39,0.08)]">
                <Upload className="size-5" />
              </span>
              <span className="text-center font-heading text-[15px] leading-[22px] font-light text-[#828282]">
                <span className="font-semibold text-[#130e27]">Click to upload</span> or drag and drop
              </span>
            </label>
            {files.length > 0 && (
              <ul className="mt-3 flex flex-col gap-2">
                {files.map((f, i) => (
                  <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-3 rounded-[10px] border border-[#e8e8e8] bg-white px-3.5 py-2.5">
                    <span className="truncate text-[13px] text-[#130e27]">{f.name}</span>
                    <button
                      type="button"
                      onClick={() => setFiles((all) => all.filter((_, j) => j !== i))}
                      className="shrink-0 text-xs font-medium text-[#666] hover:text-[#130e27]"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="my-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-[1.4] font-light text-black">
              <input
                type="checkbox"
                name="agreeToTerms"
                required
                className="relative size-5 shrink-0 cursor-pointer appearance-none rounded-md border border-[#acacac] bg-field transition checked:border-lime checked:bg-lime checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-sm checked:after:font-bold checked:after:text-[#1a3d2b] checked:after:content-['✓'] focus:shadow-[0_0_0_3px_rgba(128,230,64,0.25)] focus:outline-none"
              />
              <span>
                I understand and agree to the{" "}
                <a href={url("/terms-conditions/")} className="font-medium underline underline-offset-2 hover:text-[#73d123]">
                  terms &amp; conditions
                </a>
                .
              </span>
            </label>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-lime px-[26px] py-3.5 text-sm whitespace-nowrap text-black transition hover:-translate-y-0.5 hover:bg-[#1a3d2b] hover:text-white"
            >
              Submit Now
              <ArrowUpRight className="size-2.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          {sent && (
            <p role="status" className="-mt-4 mb-6 text-sm text-forest">
              Thanks — form submission isn&apos;t connected to a backend in this clone yet.
            </p>
          )}

          <Marquee slow className="mt-8">
            {awards.map((a) => (
              <div key={a.src} className="flex h-[113px] w-[137px] items-center justify-center pr-6">
                <Image src={a.src} alt={a.alt} title={a.alt} width={100} height={100} className="size-[100px] object-contain" />
              </div>
            ))}
          </Marquee>
        </form>
      </div>
    </section>
  );
}
