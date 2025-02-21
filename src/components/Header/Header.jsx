import { LogOut } from 'lucide-react';

export function Header({ isLogged, onLogout }) {
    return (
        <header className="p-6 absolute top-0 right-0">
            <div className={`transform transition-all duration-500 ease-in-out ${isLogged ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors shadow-sm"
                    onClick={onLogout}
                >
                <LogOut size={20} className="text-[#8B8378]" />
                <span className="text-[#8B8378] text-sm font-medium">
                    Logout
                </span>
                </button>
            </div>
        </header>
    );
}