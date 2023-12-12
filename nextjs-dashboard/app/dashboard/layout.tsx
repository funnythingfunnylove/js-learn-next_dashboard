import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex">
            <SideNav />
            <div className="flex flex-col flex-1 w-full">
                <main className="h-full overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
