"""create projects table take 2

Revision ID: def9c62fa443
Revises: 9e3661790015
Create Date: 2021-02-20 14:37:19.638210

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'def9c62fa443'
down_revision = '9e3661790015'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('projects',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('thumbnailImgUrl', sa.String(length=255), nullable=True),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('goalAmount', sa.Integer(), nullable=False),
    sa.Column('minPledge', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('projects')
    # ### end Alembic commands ###
