import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"


export default function CommentForm() {

    
    return (
        <section className="py-8">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-8">
                    <form
                        action=""
                        className="**:[&>label]:block space-y-6 *:space-y-3">
                        <div>
                            <Label className="text-xl font-semibold" htmlFor="msg">Your Comment</Label>
                            <Textarea id="msg" rows={5} placeholder="Write anything, an emoji, a comment, a reflection, etc." />
                        </div>
                        <div className="flex items-stretch space-x-2">
                            <Checkbox id="terms" />
                            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Send anonymously
                            </label>
                        </div>

                        <Button>Submit</Button>
                    </form>
                </Card>
            </div>
        </section>
    );
}
