json.array!(@meetups) do |meetup|
  json.extract! meetup, :id, :title, :description, :url
  json.url meetup_url(meetup, format: :json)
end
