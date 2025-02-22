import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import profileImage from "../../public/profile.jpg";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-black/30 backdrop-blur-sm z-10">
        <Link href="/">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <Button variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white">
          Change photo
          <Camera className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="flex flex-col place-items-center gap-8">
          {/* Profile Image */}
          <div className="relative w-full max-w-2xl aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={profileImage}
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Profile Info */}
          <div className=" w-full p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg space-y-6">
            {/* Username */}
            <div className="space-y-2">
              <Label className="text-sm text-neutral-300">USERNAME</Label>
              <h2 className="text-2xl font-bold">username123</h2>
            </div>

            {/* Account Type */}
            <div className="space-y-2">
              <Label className="text-sm text-neutral-300">Account Type</Label>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-white/10 text-white">
                  Stylar Basic
                </Badge>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Upgrade
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-y-0  w-full justify-between">

            {/* Gender Preference */}
            <div className="space-y-2">
              <Label className="text-sm text-neutral-300">Gender Preference</Label>
              <RadioGroup defaultValue="man" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="woman" id="woman" className="text-white border-white/30" />
                  <Label htmlFor="woman" className="text-white">Woman</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="man" id="man" className="text-white border-white/30" />
                  <Label htmlFor="man" className="text-white">Man</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Try On Credits */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-sm text-neutral-300">Try On Credits</Label>
                <span className="text-sm text-neutral-300">100/100</span>
              </div>
              <Progress value={100} className="h-2 bg-white/10" indicatorClassName="bg-purple-600" />
            </div>
          </div>
          </div>

          {/* Log Out Button */}
          <Button variant="secondary" className="w-full max-w-md bg-white/10 hover:bg-white/20 text-white mt-8">
            Log Out
          </Button>
        </div>
      </div>
    </main>
  );
}