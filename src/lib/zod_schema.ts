import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  pickupPlace: z
    .string()
    .min(2, { message: "Please enter a valid pickup place." }),
  dropOffPlace: z
    .string()
    .min(2, { message: "Please enter a valid drop-off place." }),
  date: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
    message: "Please select a valid date.",
  }),
  time: z.string().min(3, { message: "Please select a valid time." }),
  numberOfPassengers: z
    .number()
    .min(1, { message: "Please select at least 1 passenger." }),
  luggage: z.number().min(0, { message: "Please select at least 0 luggage." }),
  comments: z.string().optional(),
});

export default formSchema;
