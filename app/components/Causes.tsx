import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { BookOpen, Heart, Sprout, ArrowRight } from 'lucide-react';

export default function Causes() {
  const causes = [
    {
      title: "Education",
      description: "Providing quality education and learning opportunities to children and adults across Africa.",
      icon: BookOpen,
      stats: "5,000+ students supported",
      initiatives: [
        "School infrastructure development",
        "Teacher training programs",
        "Scholarship programs",
        "Digital literacy initiatives"
      ]
    },
    {
      title: "Healthcare",
      description: "Improving access to quality healthcare services and promoting wellness in underserved communities.",
      icon: Heart,
      stats: "25+ health centers supported",
      initiatives: [
        "Mobile health clinics",
        "Maternal health programs",
        "Disease prevention campaigns",
        "Healthcare worker training"
      ]
    },
    {
      title: "Agriculture",
      description: "Promoting sustainable farming practices and food security through modern agricultural techniques.",
      icon: Sprout,
      stats: "3,000+ farmers trained",
      initiatives: [
        "Sustainable farming techniques",
        "Crop diversification programs",
        "Agricultural equipment support",
        "Market access facilitation"
      ]
    }
  ];

  return (
    <section id="causes" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-50 text-orange-600 border-orange-200">Our Impact</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Our Core Causes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on three fundamental areas that drive sustainable development
            and create lasting positive change in African communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {causes.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <Card key={index} className="group transition-all duration-200 border border-gray-200 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{cause.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cause.description}
                  </p>

                  <div className="bg-orange-50 p-4 rounded-lg mb-6">
                    <p className="font-medium text-orange-700 text-sm">
                      {cause.stats}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {cause.initiatives.map((initiative, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{initiative}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200">
                    Support {cause.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="bg-gray-800 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Join us in creating sustainable change across Africa. Every contribution,
              no matter the size, helps us reach more communities and save more lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Donate Now
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-black hover:bg-gray-700 hover:text-white">
                Volunteer With Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
