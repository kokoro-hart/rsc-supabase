import { FormEvent } from "react"
import { useRouter } from "next/navigation"
import { useStore } from "@/stores/index"
import supabase from "@/utils/supabase"

export const useEditTodo = () => {
  const router = useRouter()
  const { editedTask } = useStore()
  const { loginUser } = useStore()
  const updateTask = useStore((state) => state.updateEditedTask)
  const reset = useStore((state) => state.resetEditedTask)

  function signOut() {
    supabase.auth.signOut()
    router.push("/auth")
  }
  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (editedTask.id === "") {
      const { error } = await supabase.from("todos").insert({ title: editedTask.title, user_id: loginUser.id })
      router.refresh()
      reset()
    } else {
      const { error } = await supabase.from("todos").update({ title: editedTask.title }).eq("id", editedTask.id)
      router.refresh()
      reset()
    }
  }

  return {
    loginUser,
    editedTask,
    submitHandler,
    signOut,
    updateTask,
  }
}
