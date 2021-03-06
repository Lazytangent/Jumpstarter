"""create projects table

Revision ID: 9e3661790015
Revises: ffdc0a98111c
Create Date: 2021-02-20 14:31:55.737268

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9e3661790015'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('city', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('hashedPassword', sa.String(length=255), nullable=False))
    op.add_column('users', sa.Column('profileImageUrl', sa.String(length=255), nullable=True))
    op.add_column('users', sa.Column('state', sa.String(length=50), nullable=False))
    op.drop_column('users', 'hashed_password')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('hashed_password', sa.VARCHAR(length=255), autoincrement=False, nullable=False))
    op.drop_column('users', 'state')
    op.drop_column('users', 'profileImageUrl')
    op.drop_column('users', 'hashedPassword')
    op.drop_column('users', 'city')
    # ### end Alembic commands ###
