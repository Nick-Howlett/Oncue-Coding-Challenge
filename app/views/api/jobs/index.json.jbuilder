@jobs.each do |job|
  json.partial! 'job', job: job
end