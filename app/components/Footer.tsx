import { Button } from './ui/button';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "About Us", href: "#about" },
      { name: "Our Foundations", href: "#foundations" },
      { name: "Our Causes", href: "#causes" },
      { name: "Contact Us", href: "#contact" }
    ],
    causes: [
      { name: "Education Programs", href: "#" },
      { name: "Healthcare Initiatives", href: "#" },
      { name: "Agricultural Development", href: "#" },
      { name: "Community Empowerment", href: "#" },
      { name: "Youth Development", href: "#" }
    ],
    getInvolved: [
      { name: "Volunteer", href: "#" },
      { name: "Donate", href: "#" },
      { name: "Partner With Us", href: "#" },
      { name: "Sponsor Programs", href: "#" },
      { name: "Corporate Partnerships", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-white mb-4">Gozi Africa</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering African communities through education, healthcare,
              and sustainable agriculture initiatives.
            </p>
            {/* Contact Section */}
            <div className="bg-gray-900 rounded-lg p-4 mb-2 text-gray-300 text-sm space-y-2">
              <div>
                <span className="font-semibold text-white">Address:</span>
                <div>Kingfem GA247 Plot 264, Ahmadu Bello Express Way, Mabushi-Wuse 2, Abuja, FCT-Nigeria</div>
              </div>
              <div>
                <span className="font-semibold text-white">Phone:</span>
                <div>
                  <a href="tel:+2348059000097" className="hover:text-orange-400 transition-colors">
                    +2348059000097
                  </a>
                </div>
              </div>
              <div>
                <span className="font-semibold text-white">Email:</span>
                <div>
                  <a href="mailto:info@collinsonyeaji.org" className="hover:text-orange-400 transition-colors">
                    info@collinsonyeaji.org
                  </a>
                  {", "}
                  <a href="mailto:info@goziafrica.org" className="hover:text-orange-400 transition-colors">
                    info@goziafrica.org
                  </a>
                </div>
              </div>
              <div>
                <span className="font-semibold text-white">Websites:</span>
                <div>
                  <a
                    href="https://www.collinsonyeaji.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors underline"
                  >
                    www.collinsonyeaji.org
                  </a>
                  {", "}
                  <a
                    href="https://www.goziafrica.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors underline"
                  >
                    www.goziafrica.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Causes */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Causes</h4>
            <ul className="space-y-2">
              {footerLinks.causes.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get Involved</h4>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on our impact and upcoming initiatives.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Subscribe</Button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 Gozi Africa. All rights reserved.
          </div>
          {/* <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
