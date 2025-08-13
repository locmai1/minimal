import { FEATURE_FLAGS } from '@/src/lib/config/constants';

export default function StagingBanner() {
  if (!FEATURE_FLAGS.stagingBanner) return null;

  return (
    <div className="bg-yellow-500 text-black text-center py-2 px-4 text-sm font-medium border-b border-yellow-600">
      🚧 <strong>STAGING ENVIRONMENT</strong> - This is not the live site. For testing purposes
      only.
    </div>
  );
}
