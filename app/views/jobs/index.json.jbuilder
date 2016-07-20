json.array!(@jobs) do |job|
  json.extract! job, :id, :title, :description, :url
  json.url job_url(job, format: :json)
end
