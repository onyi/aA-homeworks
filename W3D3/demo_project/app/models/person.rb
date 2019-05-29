class Person < ApplicationRecord
  validate :name, :house, presence: true

  belongs_to :house,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: :house


end