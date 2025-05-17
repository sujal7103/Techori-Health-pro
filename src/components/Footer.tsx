
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Heart, ChevronDown, FileText } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-display font-bold text-2xl text-gradient">
              RI <span className="text-medicare-600">Medicare</span>
            </div>
            <p className="text-gray-600 max-w-xs">
              Bridging the gap between healthcare and financial accessibility with flexible payment solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/apply-loan" className="text-gray-600 hover:text-brand-600 transition-colors">Apply EMI</Link>
              </li>
              <li>
                <Link to="/our-cards" className="text-gray-600 hover:text-brand-600 transition-colors">Our Cards</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-brand-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-600 hover:text-brand-600 transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  Sitemap
                </Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="p-0 h-auto font-normal text-gray-600 hover:text-brand-600 transition-colors">
                      Dashboards <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-white">
                    <DropdownMenuItem asChild>
                      <Link to="/admin-dashboard" className="cursor-pointer">Admin Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/hospital-dashboard" className="cursor-pointer">Hospital Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/patient-dashboard" className="cursor-pointer">Patient Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/support-dashboard" className="cursor-pointer">Support Dashboard</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">Buy Now, Pay Later</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">Healthcare EMI Cards</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">Hospital Partnerships</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">Medical EMI</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>BM Tower, Infront of Jeen Mata Mandir, Daulatganj, Pathankar Chourah, Lashkar Gird, Gwalior, Madhya Pradesh, Bharat - 474001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-brand-600 flex-shrink-0" />
                <a href="mailto:rimgwl@rishishwarindustry.in" className="hover:text-brand-600 transition-colors">
                  rimgwl@rishishwarindustry.in
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-brand-600 flex-shrink-0" />
                <a href="tel:+918989898989" className="hover:text-brand-600 transition-colors">
                  +91 89898 98989
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Rishishwar Industry Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-brand-600 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-500 hover:text-brand-600 text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-brand-600 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
