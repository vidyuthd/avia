defmodule Snitch.Demo.OptionType do

    alias Snitch.Core.Tools.MultiTenancy.Repo
    alias Snitch.Data.Schema.OptionType

    def create_option_types do
        
        Repo.delete_all(OptionType)
        create_option_type!("size", "Size")
        create_option_type!("color", "Color")
    end

    def create_option_type!(name, display_name) do
        params = %{
          name: name,
          display_name: display_name,
        }
        %OptionType{} |> OptionType.create_changeset(params) |> Repo.insert!
    end

end
