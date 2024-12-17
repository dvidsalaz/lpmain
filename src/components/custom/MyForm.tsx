"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SmartDatetimeInput } from "@/components/ui/smart-datetime-input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  first: z.string().max(20),
  last: z.string().max(20),
  name_5647165367: z.coerce.date(),
  name_3683013234: z.string().email(),
  name_1869697855: z.string().max(10),
  name_0066132115: z.string().max(2000).optional(),
  name_6810971642: z.string().max(9),
});

export function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_5647165367: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className=" rounded-none bg-slate-950">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex w-full gap-2 flex-col rounded-none"
      >
        <div className="flex justify-between space-x-4">
          <FormField
            control={form.control}
            name="first"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>First Name*</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none"
                    placeholder=""
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Last Name*</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none text-base"
                    placeholder=""
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="name_3683013234"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input
                  className=" rounded-none"
                  placeholder=""
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_1869697855"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number*</FormLabel>
              <FormControl>
                <Input
                  className=" rounded-none"
                  placeholder=""
                  type="number"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_5647165367"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What&apos;s the best time for you?*</FormLabel>
              <FormControl>
                <SmartDatetimeInput
                  value={field.value}
                  onValueChange={field.onChange}
                  placeholder="e.g. Tomorrow morning 9am"
                  className="rounded-none"
                />
              </FormControl>
              <FormDescription>Please select the full time</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_0066132115"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason for Call</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="resize-none rounded-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_6810971642"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code*</FormLabel>
              <FormControl>
                <Input
                  className=" rounded-none"
                  placeholder=""
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className=" text-base sm:text-lg lg:text-xl rounded-none bg-SunsetOrange"
          type="submit"
        >
          SUBMIT INQUIRY
        </Button>
      </form>
    </Form>
  );
}
