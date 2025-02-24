import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UserCircle2, ChevronDown, Plus , Minus } from "lucide-react";
import profileImage from "../public/profile.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 right-0 left-0 p-4 bg-gray-800 border-b border-gray-700 z-10">
        <div className="flex justify-evenly items-center">
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white flex items-center space-x-1 px-1 py-1 sm:px-4 sm sm:space-x-2">
                  <span>Collections</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700 text-white">
                <DropdownMenuItem className="hover:bg-gray-700">Summer 2023</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700">Winter 2023</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700">Spring 2024</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700">Fall 2024</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Create Collection Button */}
            <Dialog className="m-0">
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-1 sm:px-4">
                  <Plus className="h-4 w-4 mr-1 sm:mr-2" />
                  Create Collection
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 border-gray-700 text-white">
                <DialogHeader>
                  <DialogTitle>Create New Collection</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="collection-name">Collection Name</Label>
                    <Input
                      id="collection-name"
                      placeholder="Enter collection name"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="collection-description">Description</Label>
                    <Input
                      id="collection-description"
                      placeholder="Enter a description (optional)"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-white">
                    Cancel
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Button variant="ghost" size="icon" onClick={() => router.push("/profile")} className="text-white">
            <UserCircle2 className="h-6 w-6" />
          </Button>
          {/* <Button variant="ghost" size="icon" className="text-white">
            <Minus className="h-6 w-6" />
          </Button> */}
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20 pb-24">
        <div className="grid place-items-center">
          <div className="relative sm:w-2/5 max-w-2xl aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={profileImage}
              alt="Fashion model wearing white t-shirt and jeans"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Empty State Message
        <div className="text-center mt-8 space-y-4">
          <p className="text-neutral-400">No items yet 🛍️</p>
          <p className="text-sm text-neutral-500">
            Go to your favorite brand's site and hover over product images to reveal Stylar's try on button:
          </p>
          <Button variant="secondary" className="bg-neutral-800 hover:bg-neutral-700 text-white">
            Try on
          </Button>
        </div> */}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 p-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full bg-neutral-800 rounded-full">
            <TabsTrigger value="all" className="flex-1 data-[state=active]:bg-neutral-700">
              All Items
            </TabsTrigger>
            <TabsTrigger value="tops" className="flex-1 data-[state=active]:bg-neutral-700">
              Tops
            </TabsTrigger>
            <TabsTrigger value="bottoms" className="flex-1 data-[state=active]:bg-neutral-700">
              Bottoms
            </TabsTrigger>
            <TabsTrigger value="full" className="flex-1 data-[state=active]:bg-neutral-700">
              Full Body
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="text-center mt-8 space-y-4">
              <p className="text-neutral-400">No items yet 🛍️</p>
              <p className="text-sm text-neutral-500">
                Go to your favorite brand's site and hover over product images to reveal Stylar's try on button:
              </p>
              <Button variant="secondary" className="bg-neutral-800 hover:bg-neutral-700 text-white">
                Try on
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="tops">
            <div className="text-center mt-8 space-y-4">
              <p className="text-neutral-400">No items yet 🛍️</p>
              <p className="text-sm text-neutral-500">
                Go to your favorite brand's site and hover over product images to reveal Stylar's try on button:
              </p>
              <Button variant="secondary" className="bg-neutral-800 hover:bg-neutral-700 text-white">
                Try on
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="bottoms">
            <div className="text-center mt-8 space-y-4">
              <p className="text-neutral-400">No items yet 🛍️</p>
              <p className="text-sm text-neutral-500">
                Go to your favorite brand's site and hover over product images to reveal Stylar's try on button:
              </p>
              <Button variant="secondary" className="bg-neutral-800 hover:bg-neutral-700 text-white">
                Try on
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="full">
            <div className="text-center mt-8 space-y-4">
              <p className="text-neutral-400">No items yet 🛍️</p>
              <p className="text-sm text-neutral-500">
                Go to your favorite brand's site and hover over product images to reveal Stylar's try on button:
              </p>
              <Button variant="secondary" className="bg-neutral-800 hover:bg-neutral-700 text-white">
                Try on
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}