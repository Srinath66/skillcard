import { useState } from 'react';
import { useProfileStore } from '@/store/useProfileStore';
import { Button } from '@/components/ui/button';
import { Project } from '@/types/profile';

export function ProfileForm() {
  const { profile, setProfile } = useProfileStore();
  const [newSkill, setNewSkill] = useState('');
  const [newProject, setNewProject] = useState<Partial<Project>>({ title: '', link: '' });

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setProfile({ skills: [...profile.skills, newSkill.trim()] });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setProfile({
      skills: profile.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const handleAddProject = () => {
    if (newProject.title && newProject.link) {
      setProfile({
        projects: [...profile.projects, newProject as Project],
      });
      setNewProject({ title: '', link: '' });
    }
  };

  const handleRemoveProject = (index: number) => {
    setProfile({
      projects: profile.projects.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ name: e.target.value })}
            className="w-full p-2 border rounded-md"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            value={profile.role}
            onChange={(e) => setProfile({ role: e.target.value })}
            className="w-full p-2 border rounded-md"
            placeholder="Your role (e.g., Full Stack Developer)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ bio: e.target.value })}
            className="w-full p-2 border rounded-md"
            rows={3}
            placeholder="A brief description about yourself"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Skills</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="flex-1 p-2 border rounded-md"
              placeholder="Add a skill"
            />
            <Button onClick={handleAddSkill}>Add</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-1"
              >
                {skill}
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Projects</label>
          <div className="space-y-2 mb-2">
            <input
              type="text"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="Project title"
            />
            <input
              type="url"
              value={newProject.link}
              onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="Project URL"
            />
            <Button onClick={handleAddProject}>Add Project</Button>
          </div>
          <div className="space-y-2">
            {profile.projects.map((project, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border rounded-md"
              >
                <div>
                  <div className="font-medium">{project.title}</div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {project.link}
                  </a>
                </div>
                <button
                  onClick={() => handleRemoveProject(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Theme</label>
          <select
            value={profile.theme}
            onChange={(e) => setProfile({ theme: e.target.value as Profile['theme'] })}
            className="w-full p-2 border rounded-md"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="gradient">Gradient</option>
          </select>
        </div>
      </div>
    </div>
  );
} 