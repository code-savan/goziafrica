import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle, Plus, Zap, Users, BarChart3, ArrowRight, } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Foundations() {
  return (
    <section id="foundations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-50 text-orange-600 border-orange-200">Our Partners</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Partner Foundations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working together with dedicated foundations to amplify our impact
            and reach more communities across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Collins Onyeaji Foundation */}
          <Card className="transition-all duration-200 border border-gray-200 bg-white">
            <CardHeader>
              <div className="flex items-start mb-4 mr-6">
                {/* Logo placeholder */}
              <Image src="/logo.png" alt="Collins Onyeaji Foundation" width={200} height={200} />
                <div>
                  <CardTitle className="text-lg text-gray-800 mt-2">Collins Onyeaji Foundation</CardTitle>
                  <Badge className="mt-1 bg-orange-50 text-orange-600 border-orange-200 text-[10px]">Partner Foundation</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A dedicated foundation focused on educational advancement and youth
                empowerment across Nigeria and West Africa. Together, we&apos;re creating
                opportunities for the next generation of African leaders.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Educational scholarships</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Youth mentorship programs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Community development</span>
                </div>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="https://www.collinsonyeaji.org/" className="flex gap-2 items-center">
                <span>Visit Website</span> <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Future Foundation Placeholder */}
          <Card className="border-dashed border-2 border-gray-300 transition-colors bg-white cursor-pointer hover:border-orange-500 hover:border-solid">
            <CardContent className="p-8 text-center flex flex-col justify-center h-full min-h-[400px]">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Plus className="w-6 h-6 text-orange-500" />
              </div>
              <CardTitle className="text-lg mb-4 text-gray-800">Partner With Us</CardTitle>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We&apos;re always looking for like-minded foundations and organizations
                to join our mission of empowering African communities.
              </p>
              {/* <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">Become a Partner</Button> */}
            </CardContent>
          </Card>
        </div>

        {/* Partnership Benefits */}
        <Card className="border border-gray-200 bg-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-gray-800">Why Partner With Gozi Africa?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-medium mb-2 text-gray-800">Amplified Impact</h4>
                <p className="text-sm text-gray-600">Reach more communities and create greater change together</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-medium mb-2 text-gray-800">Shared Resources</h4>
                <p className="text-sm text-gray-600">Pool resources and expertise for maximum efficiency</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-medium mb-2 text-gray-800">Measurable Results</h4>
                <p className="text-sm text-gray-600">Track and report on collective impact and outcomes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
