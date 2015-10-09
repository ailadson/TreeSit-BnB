locs = [
  [37.733048, -122.476747],
  [37.757210, -122.424734],
  [37.770238, -122.429884],
  [37.772137, -122.458122],
  [37.756463, -122.396839]
]

5.times do |i|
  Tree.create!(lat: locs[i][0], lng: locs[i][1], description: Faker::Lorem.sentences(3))
end
