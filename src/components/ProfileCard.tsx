import { useProfileStore } from '@/store/useProfileStore';
import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';

export function ProfileCard() {
  const { profile } = useProfileStore();

  const handleDownload = async () => {
    const element = document.getElementById('profile-card');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: profile.theme === 'dark' ? '#1a1a1a' : '#ffffff',
        scale: 2,
      });
      const link = document.createElement('a');
      link.download = `${profile.name.toLowerCase().replace(/\s+/g, '-')}-profile.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  const cardClasses = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-blue-500 to-purple-600 text-white',
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        id="profile-card"
        className={`w-[400px] p-8 rounded-xl shadow-lg ${cardClasses[profile.theme || 'light']}`}
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
          <p className="text-lg opacity-80">{profile.role}</p>
        </div>

        <p className="text-center mb-6 opacity-90">{profile.bio}</p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1 rounded-full text-sm ${
                  profile.theme === 'dark'
                    ? 'bg-gray-800 text-white'
                    : profile.theme === 'gradient'
                    ? 'bg-white/20 text-white'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {profile.projects.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Projects</h2>
            <div className="space-y-2">
              {profile.projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-2 rounded-md ${
                    profile.theme === 'dark'
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : profile.theme === 'gradient'
                      ? 'bg-white/10 hover:bg-white/20'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-medium">{project.title}</div>
                  <div className="text-sm opacity-80">{project.link}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Button onClick={handleDownload}>Download as Image</Button>
    </div>
  );
} 