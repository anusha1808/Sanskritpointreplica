
import { NextPage } from 'next';

const LearnPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-center px-4 py-12 text-gray-900 dark:text-white">
      <h1 className="text-5xl font-serif font-semibold mb-10 leading-snug">
        Learn Sanskrit & Lot More<br />for your Daily Life
      </h1>

      <div className="space-y-12 max-w-3xl mx-auto">
        {/* YouTube Videos */}
        {[
          "m3aDTXnnv2k",
          "1jJA9ldWzkw",
          "u5qcX94VH2Q",
          "Ba0_M40J6Y4",
          "UfolKvCD_Dc",
          "-EGDS5nJDxs",
        ].map((videoId) => (
          <div
            key={videoId}
            className="aspect-[16/9] max-w-[620px] mx-auto bg-black rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
