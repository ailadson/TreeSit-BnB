# == Schema Information
#
# Table name: trees
#
#  id          :integer          not null, primary key
#  description :text             not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tree < ActiveRecord::Base

  def self.inBounds(bounds)

    ur = bounds[:northEast] #ur is upper right
    ll = bounds[:southWest] #ll is lower left

    Tree.where([
      "lat > ? and lat < ? and lng > ? and lng < ?",
      ll[0].to_f, ur[0].to_f,
      ll[1].to_f, ur[1].to_f
    ])
  end

end
