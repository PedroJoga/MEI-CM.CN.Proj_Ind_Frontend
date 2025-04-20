"use client"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function ResponseForm() {
    return (
        <section className="py-8">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-8">
                    <Card className="p-6 shadow-sm">
                        <div className="flex items-stretch space-x-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h3 className="text-lg font-semibold">User</h3>
                        </div>
                        <Label className="text-xs">
                            12/04/2023 12:12
                        </Label>
                        <p className="mt-2">
                            Fill out the form below and we will get back to you as soon as possible.
                        </p>
                    </Card>

                    <form
                        action=""
                        className="**:[&>label]:block space-y-6 *:space-y-3">
                        <div>
                            <Label className="text-xl font-semibold" htmlFor="msg">Your Response</Label>
                            <Textarea id="msg" rows={5} placeholder="Write anything, an emoji, a comment, a reflection, etc." />
                        </div>
                        <div className="flex items-stretch space-x-2">
                            <Checkbox id="terms" />
                            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Send anonymously
                            </label>
                        </div>

                        <Button>Send</Button>
                    </form>
                </Card>
            </div>
        </section>
    );
}
