import SideBar from '@/src/components/SideBar';
import Appointments from '@/src/webPages/Appointmnet'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SideBar />
      <main className="flex-1 transition-all duration-300 ml-0">
        <div className="p-4 lg:p-8">
          <Appointments />
        </div>
      </main>
    </div>
  );
}