import { headers, cookies } from "next/headers"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/database.types"

export const getTodos = async () => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })

  return await supabase.from("todos").select().order("created_at", { ascending: true })
}
