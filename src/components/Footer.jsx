import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 py-4">
            <div className="text-center text-sm text-gray-600">
                © 2024{" "}
                <span className="font-medium text-gray-800">Rama Putra</span>.
                Crafted with{" "}
                <Heart
                    className="inline-block w-4 h-4 text-pink-500 fill-pink-500 mx-1"
                    strokeWidth={0}
                />{" "}
                in Jakarta.
            </div>
        </footer>
    );
}
