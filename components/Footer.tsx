export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-2xl font-bold tracking-tighter text-white">
                        VENOM<span className="text-primary">RP</span>
                    </span>
                    <p className="text-gray-500 text-sm">
                        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} VenomRP
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm font-medium">تصميم الموقع بواسطة :</span>
                    <a href="https://alaash.de" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors font-bold">
                        alaash
                    </a>
                </div>
            </div>
        </footer>
    );
}
