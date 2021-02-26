import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import projectReducer, { getProjectById } from "../../store/project";
import logo_40x40 from "../SearchBar/logo_40x40.png";
import "./projectPage.css";
import Navigation from "../../components/Navigation/navigation";
import { useModalContext } from "../../context/Modal";
import DonateForm from "../../components/DonateForm/DonateForm";
import EditProjectForm from "../../components/EditProject/EditProject"


const ProjectPage = ({ setAuthenticated }) => {
  const {
    showLoginModal,
    setShowLoginModal,
    showDonateModal,
    setShowSignUpModal,
    setShowDonateModal,
    showEditProjectModal,
    setShowEditProjectModal
  } = useModalContext();

  const user = useSelector((state) => state.session.user);
  // console.log(user)
  const project = useSelector((state) => state.project.currentProject);
  const session = useSelector((state) => state.session.user);
  const { projectId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectById(projectId));
  }, [dispatch]);

  const editProject = () => {
    setShowEditProjectModal(true);
    // console.log('Hello')
  }

  return (
    <>
      <Navigation setAuthenticated={setAuthenticated} />
      {showDonateModal && <DonateForm />}
      {showEditProjectModal && <EditProjectForm />}
      {project && (
        <div className="project-container">
          <div class="grid-container">
            <div class="projectHeader grid-div">
              <h1 className="bold">{project.name}</h1>
            </div>
            <div className="projectImage">
              <div className="thumbnail">
                <img
                  src={project.thumbnailImgUrl}
                  alt="Varies project to project"
                ></img>
              </div>
            </div>
            <div className="organizer grid-div">
              {project.user.username} is organizing this fundraiser
            </div>
            {session && project.userId && (session.id === project.userId) && (

              <div className="editYourProject-button">
                <button onClick={editProject}>Edit</button>
              </div>
            )}


            <div className="description">{project.description}</div>
            <div class="donations grid-div" id="donations-slider">
              <div class="sticky-container">
                Donations
                <button
                  onClick={() => {
                    if (user !== null) {
                      setShowDonateModal(true);
                    } else {
                      setShowLoginModal((prev) => !prev);
                    }
                  }}
                >
                  Donate
                </button>
              </div>
            </div>
            <div class="comments grid-div">
              <h1 className="comments-header">
                {/* As of Thursday night, this won't exclude anonymous donations
              So the count will probably (not tested) display a higher number than comments shown*/}
                Donations ({project.donations.length})
              </h1>
              <ul className="donations-ul">
                {project.donations &&
                  project.donations.map((donation, idx) => (
                    <>
                      {!donation.anonymous && (
                        <li key={idx} className="donation-listItem">
                          <div className="donation-container">
                            <div className="comment-avatar">
                              {donation.donator.profileImageUrl ? (
                                <div className="logoBackground">
                                  <img
                                    src={donation.donator.profileImageUrl}
                                    className="userProfilePicture"
                                    alt="JumpStart User"
                                  ></img>
                                </div>
                              ) : (
                                  <div className="logoBackground">
                                    <img
                                      src={logo_40x40}
                                      alt="JumpStart Logo"
                                    ></img>
                                  </div>
                                )}
                            </div>
                            <div className="comment-header">
                              {donation.donator.username} donated $
                              <b>{donation.donationAmount}</b>
                            </div>
                            <div className="comment-content">
                              {donation.comment}
                            </div>
                            <div className="spacer"></div>
                            <div className="comment-footer"></div>
                          </div>
                        </li>
                      )}
                    </>
                  ))}
                <p>CHECKING</p>
                <p>TO</p>
                <p>MAKE</p>
                <p>SURE</p>
                <p>STICKY</p>
                <p>SLIDES</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
              </ul>
            </div>
            <div className="footer grid-div">
              <p>FOOTER</p>
            </div>
          </div>
          <div>d</div>
        </div>
      )}
    </>
  );
};

export default ProjectPage;
