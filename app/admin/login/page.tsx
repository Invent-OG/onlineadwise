// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Lock } from "lucide-react";
// import { useLogin } from "@/lib/queries/auth";

// export default function AdminLoginPage() {
//   const router = useRouter();
//   const loginMutation = useLogin();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await loginMutation.mutateAsync({ email, password });
//       if (response.success) {
//         sessionStorage.setItem("isAuthenticated", "true");
//         router.push("/admin/leads");
//       }
//     } catch (error) {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-background">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-md"
//       >
//         <Card>
//           <CardHeader className="flex flex-col items-center space-y-1">
//             <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary">
//               <Lock className="w-6 h-6 text-primary-foreground" />
//             </div>
//             <CardTitle className="text-2xl">Admin Login</CardTitle>
//             <CardDescription>
//               Enter your credentials to access the admin panel
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {error && (
//                 <div className="p-3 text-sm rounded bg-destructive/10 text-destructive">
//                   {error}
//                 </div>
//               )}

//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Email</label>
//                 <Input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Password</label>
//                 <Input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full"
//                 disabled={loginMutation.isPending}
//               >
//                 {loginMutation.isPending ? "Logging in..." : "Login"}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";
import { useLogin } from "@/lib/queries/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const loginMutation = useLogin();
  const [error, setError] = useState("");

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    // Check if already authenticated
    const isAuthenticated =
      sessionStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      router.push("/admin/leads");
    }
  }, [router]);

  const handleSubmit = async (data: LoginFormData) => {
    setError("");

    try {
      const response = await loginMutation.mutateAsync(data);
      if (response.success) {
        sessionStorage.setItem("isAuthenticated", "true");
        router.push("/admin/leads");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4"
      >
        <Card>
          <CardHeader className="flex flex-col items-center space-y-1">
            <div className="flex items-center justify-center mb-4">
              <Image
                title="Insight-Logo"
                src="/assets/logo.png"
                alt="Insight Logo"
                width={80}
                height={80}
              />
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                {error && (
                  <div className="p-3 text-sm rounded bg-destructive/10 text-destructive">
                    {error}
                  </div>
                )}

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="admin@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? "Logging in..." : "Login"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
