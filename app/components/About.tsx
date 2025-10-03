import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    { icon: CheckCircle, title: "Integrity & Transparency", description: "Operating with complete honesty and openness" },
    { icon: Users, title: "Community Empowerment", description: "Putting communities at the center of development" },
    { icon: Target, title: "Sustainable Development", description: "Creating lasting change for future generations" },
    { icon: Lightbulb, title: "Innovation & Excellence", description: "Embracing new approaches to solve old problems" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-50 text-orange-600 border-orange-200">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            About Gozi Africa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a non-governmental organization committed to creating sustainable
            change across African communities through targeted interventions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To empower African communities by providing access to quality education,
              healthcare services, and sustainable agricultural practices that foster
              long-term development and self-reliance.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in the power of collaboration, working closely with local
              communities, governments, and international partners to create lasting
              positive change.
            </p>
          </div>

          <Card className="bg-gray-50 border border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A thriving Africa where every community has access to the resources
                and opportunities needed to achieve their full potential.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center transition-all duration-200 border border-gray-200 bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="font-medium mb-2 text-gray-800">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
