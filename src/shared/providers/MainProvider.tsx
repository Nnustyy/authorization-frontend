'use client'
import { type  PropsWithChildren } from "react";
import { TanstackQueryProvider } from "./TanstackQueryProvider";
import { ThemeProvider } from "next-themes";

export function MainProvider ({children}: PropsWithChildren<unknown>) {
  return (
    <TanstackQueryProvider>
      <ThemeProvider 
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children }
      </ThemeProvider>
      </TanstackQueryProvider>
  )
}