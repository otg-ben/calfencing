"use client";

import { useState, useEffect } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (submitted) {
      window.gtag?.('event', 'conversion', {
        send_to: 'AW-1040856089/N45DCKqez6McEJnoqPAD',
      })
    }
  }, [submitted])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xkoqykrj', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json().catch(() => ({}));
        const msg = (json as { error?: string }).error ?? 'Something went wrong. Please try again.';
        setError(msg);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-white/40">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
            Contact Us
          </h1>
          <p className="text-charcoal/60 max-w-2xl text-lg">
            Ready to start your project? Get in touch for a free estimate.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-display text-2xl mb-6">Request an Estimate</h2>

            {submitted ? (
              <div className="bg-sage/10 border border-sage/30 rounded-sm p-8 text-center">
                <h3 className="font-display text-xl mb-2 text-sage">
                  Thank You!
                </h3>
                <p className="text-charcoal/70">
                  We&apos;ve received your message and will get back to you
                  within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-1"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-sage transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="fencing">Fencing</option>
                    <option value="decking">Decking</option>
                    <option value="retaining-walls">Retaining Walls</option>
                    <option value="gates">Gates &amp; Arbors</option>
                    <option value="trellises">Trellises</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-charcoal/20 rounded-sm px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-sage transition-colors resize-none"
                  />
                </div>
                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-sage text-white px-8 py-3 rounded-sm text-sm tracking-wide hover:bg-sage/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl mb-6">Get In Touch</h2>
            <div className="space-y-6 text-charcoal/70">
              <div>
                <h3 className="font-medium text-charcoal mb-1">Phone</h3>
                <a
                  href="tel:415-472-1419"
                  className="text-sage hover:text-sage/80 transition-colors"
                  onClick={() => {
                    window.gtag?.('event', 'conversion', {
                      send_to: 'AW-1040856089/N3XsCKeez6McEJnoqPAD',
                    })
                  }}
                >
                  415-472-1419
                </a>
              </div>
              <div>
                <h3 className="font-medium text-charcoal mb-1">Email</h3>
                <a
                  href="mailto:calfence@gmail.com"
                  className="text-sage hover:text-sage/80 transition-colors"
                >
                  calfence@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-medium text-charcoal mb-1">
                  Service Area
                </h3>
                <p>Marin County, California</p>
                <p className="text-sm mt-1">
                  Including San Rafael, Mill Valley, Novato, Tiburon,
                  Corte Madera, Larkspur, Fairfax, and surrounding areas.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-charcoal mb-1">Hours</h3>
                <p>Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM</p>
                <p>Saturday: By appointment</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="pt-4 border-t border-charcoal/10">
                <p className="text-sm">
                  <span className="text-sage font-medium">
                    ★ Diamond Certified
                  </span>{" "}
                  — Rated Highest in Quality by verified customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
