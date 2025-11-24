import React, { useRef } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  avatar,
  linkedin,
  twitter,
  github,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(ref);

  return (
    <div
      ref={ref}
      className="animate-on-scroll opacity-0 translate-y-5 card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center text-4xl font-bold text-accent group-hover:from-accent/30 group-hover:to-accent/10 transition-all">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            name.charAt(0).toUpperCase()
          )}
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div className="text-accent font-medium mb-4">{role}</div>
        <p className="text-muted leading-relaxed mb-6">{bio}</p>

        {/* Social Links */}
        {(linkedin || twitter || github) && (
          <div className="flex justify-center gap-4 pt-4 border-t border-border/50">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <FaLinkedin size={20} />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                aria-label={`${name}'s Twitter`}
              >
                <FaTwitter size={20} />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                aria-label={`${name}'s GitHub`}
              >
                <FaGithub size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
