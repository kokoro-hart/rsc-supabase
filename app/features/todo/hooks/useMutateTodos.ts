import { useRouter } from "next/navigation"
import supabase from "@/utils/supabase"
import { useStore } from "@/stores/index"
import type { Database } from "@/database.types"

export const useMutateTodos = () => {
  const router = useRouter()
  const updateTask = useStore((state) => state.updateEditedTask)
  const resetTask = useStore((state) => state.resetEditedTask)
  async function updateMutate(id: string, completed: boolean) {
    await supabase.from("todos").update({ completed: completed }).eq("id", id)
    resetTask()
    router.refresh()
  }
  async function deleteMutate(id: string) {
    await supabase.from("todos").delete().eq("id", id)
    router.refresh()
  }

  return {
    updateTask,
    updateMutate,
    deleteMutate,
  }
}
