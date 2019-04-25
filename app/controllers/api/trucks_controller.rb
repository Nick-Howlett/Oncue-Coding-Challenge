class Api::TrucksController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @truck = Truck.new(truck_params)
    if @truck.save
      render :show
    else
      render json: @truck.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @trucks = Truck.all
  end

  private

  def truck_params
    params.require(:truck).permit(:name, :avail_start, :avail_end)
  end
end
