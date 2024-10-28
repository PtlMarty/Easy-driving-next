"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import formSchema from "@/lib/zod_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Define your form schema using Zod.

export function InquiryForm({ className = "" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      pickupPlace: "",
      dropOffPlace: "",
      date: "",
      time: "",
      numberOfPassengers: 1,
      luggage: 0,
      comments: "",
    },
  });

  // Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    //TODO: should be able to send a automatic email to the company

    // For now, just log the form values
    console.log(values); // Handle form submission

    // and display a success message
    alert("Thank you for your inquiry. We will contact you shortly.");
    // Clear the form after submission
    form.reset();
  }

  if (!isMounted) {
    return null;
  }

  // Render form component
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full flex flex-col gap-4 ${className}`}
      >
        <div className="flex w-auto mt-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-auto mt-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-auto mt-2 gap-4">
          <FormField
            control={form.control}
            name="pickupPlace"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Place</FormLabel>
                <FormControl>
                  <Input placeholder="Pickup Place" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dropOffPlace"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Drop-off Place</FormLabel>
                <FormControl>
                  <Input placeholder="Drop-off Place" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex w-auto mt-2 gap-4">
          <FormField
            control={form.control}
            name="numberOfPassengers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Passengers</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="luggage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Luggage</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-auto mt-2 gap-14">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Give us some details...</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Comments"
                  {...field}
                  className="input border"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="text-white">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default InquiryForm;
