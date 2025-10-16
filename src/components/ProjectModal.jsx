import { useEffect } from "react";
import { SocialsButton, CategoryPillContainer } from "@/components/Common";
import "@/styles/ProjectModal.css";

function ProjectModal({ project, isOpen, onClose }) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const social_media_links = project.links
    ? Object.entries(project.links).map(([type, url]) => ({
        type,
        url,
      }))
    : [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <span className="modal-status">{project.status}</span>
        </div>

        <div className="modal-body">
          <div className="modal-images">
            {project.imagePaths && project.imagePaths.length > 1 ? (
              <div className="image-carousel">
                {project.imagePaths.map((path, index) => (
                  <img
                    key={index}
                    src={`./${path}`}
                    className="modal-image"
                    alt={`${project.title} - ${index + 1}`}
                  />
                ))}
              </div>
            ) : (
              project.imagePaths &&
              project.imagePaths.length === 1 && (
                <img
                  src={`./${project.imagePaths[0]}`}
                  className="modal-image"
                  alt={project.title}
                />
              )
            )}
          </div>

          <div className="modal-details">
            <CategoryPillContainer tags={project.tags} />
            <p className="modal-description">{project.description}</p>

            {social_media_links.length > 0 && (
              <div className="modal-links">
                <h4>Links:</h4>
                <div className="modal-social-buttons">
                  {social_media_links.map(({ type, url }, index) => (
                    <SocialsButton key={index} variant={type} link={url} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
