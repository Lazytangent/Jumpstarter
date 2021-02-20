from .db import db


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    thumbnailImgUrl = db.Column(db.String(255), nullable=True)
    description = db.Column(db.Text, nullable=False)
    goalAmount = db.Column(db.Integer, nullable=False)
    minPledge = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates="projects")
    donations = db.relationship("Donation", back_populates="project")
    images = db.relationship("Image", back_populates="project")
