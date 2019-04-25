json.set! truck.id do
  json.extract! truck, :id, :name, :avail_start, :avail_end
end
