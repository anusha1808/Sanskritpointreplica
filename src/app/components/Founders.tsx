
export default function Founders() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10">
      <div className="max-w flex flex-wrap justify-start items-center gap-6 ml-6">
        
        {/* Left Section: Founders' Details */}
        <div className="flex-1 space-y-4">
          <div className="text-center md:text-left space-y-2">
            <FounderCard name="Apurva & Apurvee" role="Founders" />
            <FounderCard name="Arjun" role="Co-Founder" />
          </div>
        </div>

        {/* Centered website name */}
        <div className="w-full text-center mt-8 text-xl font-bold">sanskritpoint.online</div>
      </div>
    </div>
  );
}

function FounderCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="text-lg">
      <p>{role}: {name}</p>
    </div>
  );
}