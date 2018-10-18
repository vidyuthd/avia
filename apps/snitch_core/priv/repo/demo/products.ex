defmodule Snitch.Demo.Product do

    alias Snitch.Core.Tools.MultiTenancy.Repo
    alias Snitch.Data.Schema.Product

    def create_products do
        Repo.delete_all(Product)

    end

end
