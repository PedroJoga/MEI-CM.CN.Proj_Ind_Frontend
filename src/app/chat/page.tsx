"use client"
import ResponseForm from "@/components/response-form"
import CommentForm from "@/components/comment-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <CommentForm />
      </div>
    </div>
  )
}
