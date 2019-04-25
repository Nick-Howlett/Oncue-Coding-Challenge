class Api::JobsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @jobs = Job.all
  end

  def create
    @job = Job.new(job_params)
    truck = Truck.find_available_truck(@job.date, @job.start, @job.end)
    if truck
      @job.truck_id = truck.id
    else
      render json: ["No available trucks for selected timeframe"], status: :unprocessable_entity
      return
    end
    if @job.save
      render :show
    else
      render json: @job.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def job_params
    params.require(:job).permit(:name, :date, :start, :end)
  end
end
