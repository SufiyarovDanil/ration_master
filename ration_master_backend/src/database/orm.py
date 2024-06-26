from sqlalchemy import SmallInteger, VARCHAR, UUID, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from src.database import BaseORM, engine
from util import fill_db


class ProductModel(BaseORM):
    __tablename__ = 'product'

    id: Mapped[UUID] = mapped_column(
        UUID,
        primary_key=True,
        name='pk_id'
    )
    name: Mapped[VARCHAR] = mapped_column(
        VARCHAR(64),
        nullable=False,
        unique=True,
        name='name'
    )
    calorie: Mapped[SmallInteger] = mapped_column(
        SmallInteger,
        nullable=False,
        name='calorie'
    )
    protein: Mapped[SmallInteger] = mapped_column(
        SmallInteger,
        nullable=False,
        name='protein'
    )
    fat: Mapped[SmallInteger] = mapped_column(
        SmallInteger,
        nullable=False,
        name='fat'
    )
    carbohydrate: Mapped[SmallInteger] = mapped_column(
        SmallInteger,
        nullable=False,
        name='carbohydrate'
    )


class RationModel(BaseORM):
    __tablename__ = 'ration'

    id: Mapped[UUID] = mapped_column(
        UUID,
        primary_key=True,
        name='pk_id'
    )
    product_id: Mapped[UUID] = mapped_column(
        UUID,
        ForeignKey('product.pk_id', ondelete='SET NULL'),
        nullable=False,
        name='fk_product_id'
    )
    product_gramm: Mapped[SmallInteger] = mapped_column(
        SmallInteger,
        nullable=False,
        name='product_gramm'
    )
    meal_time: Mapped[SmallInteger] = mapped_column(
        SmallInteger,
        nullable=False,
        name='meal_time'
    )
    product: Mapped[ProductModel] = relationship(ProductModel)


def create_db() -> None:
    BaseORM.metadata.create_all(engine)
    fill_db('/sqlite_data/sqlite.db')
