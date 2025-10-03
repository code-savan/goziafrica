import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Phone, Mail, Heart, DollarSign, Handshake, Star } from 'lucide-react';

export default function Contact() {

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Kingfem GA247 Plot 264 Ahmadu Bello Express Way, Mabushi-Wuse 2, Abuja, FCT-Nigeria"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+2348059000097"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@collinsonyeaji.org", "info@goziafrica.org"]
    }
  ];

  const involvementOptions = [
    { icon: Heart, title: "Volunteer", description: "Join our team and make a direct impact", color: "bg-primary" },
    { icon: DollarSign, title: "Donate", description: "Support our causes financially", color: "bg-primary" },
    { icon: Handshake, title: "Partner", description: "Collaborate with us on projects", color: "bg-primary" },
    { icon: Star, title: "Sponsor", description: "Sponsor specific programs or events", color: "bg-primary" }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-50 text-orange-600 border-orange-200">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join our mission? Have questions about our work?
            We&apos;d love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-gray-800">{info.title}</h4>
                        <div className="text-gray-600">
                          {info.details.map((detail, idx) => (
                            <div key={idx}>{detail}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ways to Get Involved */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Ways to Get Involved</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {involvementOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <Card key={index} className="cursor-pointer transition-all duration-200 border border-gray-200 bg-white">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-orange-500" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1 text-gray-800">{option.title}</h4>
                            <p className="text-sm text-gray-600">{option.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map */}
          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-0 h-full">
              {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">Find Us</h3> */}
              <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7515884772884!2d7.456833075266086!3d9.086379890977284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b77ebdbc4a9%3A0x5b94975c44a886f!2sKingfem%20plaza%2CAbuja!5e0!3m2!1sen!2sus!4v1759480653089!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gozi Africa Location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
