@trucks.each do |truck|
  json.partial! 'truck', truck: truck
end
